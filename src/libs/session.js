import { parse, serialize } from 'cookie';

const SESSION_NAME = 'sessionId';
const MAX_AGE = 60 * 60 * 24 * 7;

export function getSession(request) {
    const cookies = parse(request.headers.cookie || '');
    return cookies[SESSION_NAME];
}

export function setSession(response, sessionId) {
    const cookie = serialize(SESSION_NAME, sessionId, {
        maxAge: MAX_AGE,
        expires: new Date(Date.now() + MAX_AGE * 1000),
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
    });
    response.headers.append('Set-Cookie', cookie);
}
