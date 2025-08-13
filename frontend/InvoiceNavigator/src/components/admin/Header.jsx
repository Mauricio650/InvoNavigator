import { NavLink } from 'react-router-dom'
import { BtnClassic } from '../BtnClassic'

export function HeaderAdmin () {
  return (
    <>
      <NavLink to='uploadInvoice'>
        <BtnClassic>Upload Invoices</BtnClassic>
      </NavLink>
      <NavLink to='updateInvoice'>
        <BtnClassic>Update Invoices</BtnClassic>
      </NavLink>
      <NavLink to='deleteInvoice'>
        <BtnClassic>Delete Invoices</BtnClassic>
      </NavLink>

    </>
  )
}
