import React from 'react'
import { LayoutStyled } from '../../src/styles/global/Layout'

interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: IPropsLayout): JSX.Element => {
  return (
    <LayoutStyled>
      <header>
        <section>
          <h2>Title</h2>
        </section>
        <ul>
          <li>
            <a>List item</a>
          </li>
          <li>
            <a>List item</a>
          </li>
          <li>
            <a>List item</a>
          </li>
        </ul>
        <section>
          <ul>
            <li>
              <a>Sing In</a>
            </li>
            <li>
              <a>Sing Up</a>
            </li>
          </ul>
        </section>
      </header>
      <main>{children}</main>
      <footer></footer>
    </LayoutStyled>
  )
}
