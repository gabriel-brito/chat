import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.button`
  background-color: #283350;
  border-radius: 0.3em;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5em 1.5em;

  ${media.greaterThan('medium')`
    width: 13em;
  `}
`
