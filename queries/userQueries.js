export const insertUserQuery = `
 INSERT INTO users(username, email, password) VALUES ($1,$2,$3) RETURNING *
`;

export const findUserByEmailQuery = `
  SELECT * FROM users WHERE email = $1
`;
