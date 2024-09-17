import createNextIntlPlugin from 'next-intl/plugin' //hàm tạo middleware

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
