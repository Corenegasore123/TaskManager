// src/models/taskModel.ts
import { Client } from 'pg';

const client = new Client();

export class Task {
  static async create(title: string, description: string, deadline: string, priority: string, status: string, assigned_to: number) {
    const result = await client.query(
      'INSERT INTO tasks (title, description, deadline, priority, status, assigned_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, description, deadline, priority, status, assigned_to]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await client.query('SELECT * FROM tasks');
    return result.rows;
  }

  static async getById(id: number) {
    const result = await client.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id: number, updatedFields: Record<string, any>) {
    const setString = Object.keys(updatedFields)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');
    const values = [id, ...Object.values(updatedFields)];

    const result = await client.query(
      `UPDATE tasks SET ${setString} WHERE id = $1 RETURNING *`,
      values
    );
    return result.rows[0];
  }

  static async delete(id: number) {
    const result = await client.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }
}
