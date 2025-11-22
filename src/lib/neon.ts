import { neon } from '@neondatabase/serverless';

/**
 * CONFIGURACIÓN DE BASE DE DATOS (OPCIONAL)
 * 
 * Esta configuración permite usar likes/dislikes en los posts del blog.
 * Actualmente está DESACTIVADA para permitir que el blog funcione sin base de datos.
 * 
 * CÓMO REACTIVAR LA BASE DE DATOS:
 * 
 * 1. Crear una cuenta en Neon (https://neon.tech)
 * 2. Crear una nueva base de datos PostgreSQL
 * 3. Copiar la connection string que te proporciona Neon
 * 4. Crear un archivo `.env` en la raíz del proyecto con:
 *    NEON_DATABASE_URL="postgresql://user:password@host/database"
 * 5. Crear las tablas necesarias ejecutando este SQL en tu base de datos:
 * 
 *    CREATE TABLE post_feedback (
 *      post_id VARCHAR(255) PRIMARY KEY,
 *      likes INTEGER DEFAULT 0,
 *      dislikes INTEGER DEFAULT 0,
 *      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 *    );
 * 
 *    CREATE TABLE post_likes (
 *      id SERIAL PRIMARY KEY,
 *      post_id VARCHAR(255) NOT NULL,
 *      fingerprint_id VARCHAR(100) NOT NULL,
 *      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *      UNIQUE(post_id, fingerprint_id)
 *    );
 * 
 *    CREATE TABLE post_dislikes (
 *      id SERIAL PRIMARY KEY,
 *      post_id VARCHAR(255) NOT NULL,
 *      fingerprint_id VARCHAR(100) NOT NULL,
 *      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *      UNIQUE(post_id, fingerprint_id)
 *    );
 * 
 * 6. Descomentar la línea de abajo y comentar la línea actual
 * 7. Reiniciar el servidor de desarrollo
 * 
 * VERSIÓN CON BASE DE DATOS (comentada):
 * export const sql = neon(import.meta.env.NEON_DATABASE_URL);
 * 
 * VERSIÓN SIN BASE DE DATOS (actual - permite que el blog funcione sin DB):
 */
export const sql = import.meta.env.NEON_DATABASE_URL ? neon(import.meta.env.NEON_DATABASE_URL) : null;