// src/models/userModel.ts
import { Client } from 'pg';

const client = new Client();

export class User {
  static async create(name: string, email: string, password: string) {
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  }

  static async getById(id: number) {
    const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async update(id: number, updatedFields: Record<string, any>) {
    const setString = Object.keys(updatedFields)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');
    const values = [id, ...Object.values(updatedFields)];

    const result = await client.query(
      `UPDATE users SET ${setString} WHERE id = $1 RETURNING *`,
      values
    );
    return result.rows[0];
  }
}
