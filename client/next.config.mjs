/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
		domains: [
	"clipartmax.com",
			"s3.amazonaws.com",
			"unsplash.com",
			"ott.bgea.live",
			"deow9bq0xqvbj.cloudfront.net",
			"d3wo5wojvuv7l.cloudfront.net",
			"episodes.castos.com",
		],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "**",
			},
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
