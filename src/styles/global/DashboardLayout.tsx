import styled from 'styled-components'

export const DashboardLayoutStyled = styled.main`
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  header section {
    display: flex;
    align-items: center;
  }

  header ul {
    display: flex;
  }

  header ul li {
    padding: 10px;
  }

  header > section > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${props => props.theme.colors.primary};
  }
`
