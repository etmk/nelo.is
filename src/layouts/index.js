import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Twemoji from 'react-twemoji'
import store from 'store'

import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from '../styles/theme'

import Page, { Content } from '../components/Page'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Template extends Component {
	constructor(props) {
		super(props)
		this.toggleNav = this.toggleNav.bind(this)
		this.toggleDarkMode = this.toggleDarkMode.bind(this)
		this.state = {
			isNavOpen: false,
			isDarkMode: store.get('dark_mode')
		}
	}

	toggleNav() {
		this.setState({ isNavOpen: !this.state.isNavOpen })
	}

	toggleDarkMode() {
		store.set('dark_mode', !this.state.isDarkMode)
		this.setState({
			isDarkMode: !this.state.isDarkMode
		})
	}

	render() {
		const { location, children } = this.props
		const { isNavOpen, isDarkMode } = this.state
		const posts = get(this, 'props.data.allMarkdownRemark.edges')

		return (
			<ThemeProvider theme={isDarkMode ? dark : light}>
				<Twemoji>
					<Page isNavOpen={isNavOpen}>
						<Header
							toggleNav={this.toggleNav}
							toggleDarkMode={this.toggleDarkMode}
							isNavOpen={isNavOpen}
							isDarkMode={isDarkMode} />
						<Content>
							{children()}
						</Content>
						<Footer recent={posts} />
					</Page>
				</Twemoji>
			</ThemeProvider>
		)
	}
}

export default Template

export const pageQuery = graphql`
  query FooterQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 5,
      filter: { frontmatter: { model: { ne: "project" }, draft: { ne: true } } }
    ) {
      edges {
        node {
					id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
