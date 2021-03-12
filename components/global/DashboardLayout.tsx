import React from 'react'
import { DashboardLayoutStyled } from '../../src/styles/global/DashboardLayout'
import { LayoutStyled } from '../../src/styles/global/Layout'

interface IPropsLayout {
  children: JSX.Element | JSX.Element[]
}

export const DashboardLayout = ({ children }: IPropsLayout): JSX.Element => {
  return (
    <DashboardLayoutStyled>
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
              <a>Notify</a>
            </li>
            <li>
              <a>Favorites</a>
            </li>
          </ul>
          <img src="" alt="" />
        </section>
      </header>
      <main>{children}</main>
      <footer></footer>
    </DashboardLayoutStyled>
  )
}
