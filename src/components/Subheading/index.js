import styled from 'styled-components'
import { color, display, space, textAlign, themeGet } from 'styled-system'
import { subheading } from '../../styles/typography'

const Subheading = styled.h6`
	${subheading}
	color: ${themeGet('colors.contrast.2')};
	font-size: 0.85em;

	${color}
	${display}
	${space}
	${textAlign}
`

Subheading.defaultProps = {
  textAlign: 'inherit'
}

export default Subheading
