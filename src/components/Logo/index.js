import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import styled, { keyframes } from 'styled-components'
import { logo } from '../../styles/typography'

const bounce = keyframes`
  from, 53%, 80%, to {
    animation-timing-function: ease-out;
		transform: translate3d(0,0,0);
  }

  18%, 53%, 80% {
		transform: scaleY(0.6) translate3d(0,0,0);
  }

  30%, 43% {
		animation-timing-function: ease-in;
    transform: translate3d(0, -18px, 0);
  }

  70% {
		animation-timing-function: ease-in;
    transform: translate3d(0, -12px, 0);
  }

  90% {
    transform: translate3d(0,-8px,0);
  }

  to {
    animation-timing-function: ease-out;
  }
`

const shadow = keyframes`
  from, 18%, 53%, 80%, to {
		animation-timing-function: ease-out;
		transform: scaleY(0);
  }

  30%, 43% {
		animation-timing-function: ease-in;
    transform: scaleY(0.35);
  }

  53%, 80% {
		transform: scaleY(0.6);
  }

  70% {
		animation-timing-function: ease-in;
    transform: scaleY(0.27);
  }

  to {
    animation-timing-function: ease-out;
  }
`

export const Dot = styled.span`
	font-size: 1.25em;
	position: relative;

	&:before,
	&:after {
		animation: none;
		content: '.';
		display: inline-flex;
		transform-origin: bottom;
	}

	&:before {
		color: ${props => props.theme.primary};
		position: absolute;
	}

	&:after {
		color: rgba(0, 0, 0, 0.15);
		position: relative;
		z-index: -1;
	}
`

const Title = styled.h1`
  display: inline-flex;
  line-height: 1;
  margin: -0.25em 0 0;
  white-space: nowrap;
  z-index: 1;

  * {
		${logo}
  }

  a {
    color: ${props => props.theme.text};
    font-size: 0.8em;
    letter-spacing: -0.0362em;
    text-decoration: none;

    &.bouncing {
      & > ${Dot} {
				&:before {
					animation: ${bounce} 1.8s 1;
				}
				&:after {
					animation: ${shadow} 1.8s 1;
				}
      }
    }
  }
`

export const LogoIcon = styled.div`
	${logo}
	align-items: center;
	background: ${props => props.theme.text};
	border-radius: 0.2em;
	color: ${props => props.theme.base};
	display: inline-flex;
	font-size: 4em;
	height: 1.25em;
	justify-content: center;
	letter-spacing: -0.0612em;
	width: 1.25em;

	&:before {
		content: 'n';
	}

	&:after {
		color: ${props => props.available ? props.theme.secondary : props.theme.primary};
		content: '.';
	}
`

class Logo extends PureComponent {
	constructor(props) {
		super(props)
		this.addAnimation = this.addAnimation.bind(this)
		this.removeAnimation = this.removeAnimation.bind(this)
		this.handleLogoClick = this.handleLogoClick.bind(this)
		this.state = {
			isAnimating: false
		}
	}

	addAnimation() {
		this.setState({ isAnimating: true })
	}

	removeAnimation() {
		if (this.state.isAnimating) {
			this.setState({ isAnimating: false })
		}
	}

	handleLogoClick() {
		const { toggleNav, isNavOpen } = this.props

		if (isNavOpen) {
			toggleNav()
		}
	}

	render() {
		return (
			<Title onMouseDown={this.addAnimation}>
				<Link to="/" className={this.state.isAnimating ? 'bouncing' : ''} onMouseUp={this.handleLogoClick}>
					Nelo
          <Dot onAnimationEnd={this.removeAnimation} />
				</Link>
			</Title>
		)
	}
}

export default Logo
