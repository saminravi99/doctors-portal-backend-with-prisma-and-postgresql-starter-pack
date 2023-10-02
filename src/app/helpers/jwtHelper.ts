import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string,
): string => {
  return jwt.sign(payload, secret, { expiresIn: expireTime })
}

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload
}

export const jwtHelpers = { createToken, decodeToken }
