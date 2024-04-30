const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const fullName = name || 'buddy';
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));