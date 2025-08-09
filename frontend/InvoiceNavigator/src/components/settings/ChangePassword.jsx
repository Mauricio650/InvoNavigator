export function ChangePassword () {
  return (
    <article className='w-full h-1/2 flex flex-col justify-center items-center gap-3'>
      <ProfileLogo />
      <h2>{user.user.fullName}</h2>
      <NavLink to='changePassword'>
        <BtnClassic>
          New password
        </BtnClassic>
      </NavLink>
    </article>
  )
}
