// src/utils/regex.ts

export const regexPatterns = {
    name: /^[A-Za-z\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    subject: /^[\w\s.,!?'"-]{2,100}$/,
    message: /^[\s\S]{10,1000}$/,
};

export const regexErrors = {
    name: "Name should contain only letters and spaces (2–50 characters).",
    email: "Please enter a valid email address.",
    subject: "Subject should be 2–100 characters long.",
    message: "Message should be at least 10 characters long.",
};
