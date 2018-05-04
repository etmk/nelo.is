module.exports = {
	siteMetadata: {
		title: 'Nelo',
		author: 'Aaron Noel De Leon',
		description: 'Personal website',
		siteUrl: 'https://nelo.is',
		email: 'here@nelo.is',
		forHire: true
	},
	pathPrefix: '/',
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/assets`,
				name: 'assets',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							linkImagesToOriginal: false,
							maxWidth: 740
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					'gatsby-remark-autolink-headers',
					'gatsby-remark-external-links',
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-77418752-3`,
			},
		},
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-feed`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: '#43bf4d',
				showSpinner: false
			},
		},
	],
}
