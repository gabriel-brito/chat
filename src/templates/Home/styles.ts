import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeWrapper = styled.main`
  margin: 0 auto;
  max-width: 196em;
  height: 100vh;
`

export const ChatWrapper = styled.div`
  border-left: 0.1em solid black;
  border-right: 0.1em solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 80em;
  position: relative;
  width: 100%;
`

export const ChatFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 8em;
  padding: 0 1em;

  * {
    height: 50px;
  }

  ${media.greaterThan('medium')`
    justify-content: space-between;
  `}
`
export const InputsWrapper = styled.div`
  display: flex;

  ${media.lessThan('small')`
    width: 75%;
  `}

  ${media.greaterThan('medium')`
    width: 85%;
  `}
`
