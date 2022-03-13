import Logo from "../Common/Logo/Logo";

export default function Login() {
  return (
    <div class='modal fade' id='loginModal' tabindex='-1' aria-labelledby='loginModalLabel' aria-hidden='true'>
      <div class='modal-dialog modal-dialog-centered'>
        <div class='modal-content'>
          <div class='modal-header'>
            <Logo />
            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div class='modal-body'>
            <form>
              <h1 className='h3 mb-4 fw-normal'>Please log in or sign up</h1>

              <div className='form-floating' bis_skin_checked='1'>
                <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
                <label for='floatingInput'>Email address</label>
              </div>
              <div className='form-floating mt-2' bis_skin_checked='1'>
                <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
                <label for='floatingPassword'>Password</label>
              </div>

              <div className='text-end mt-5'>
                <button type='submit' className='btn btn-outline-primary me-2' data-bs-dismiss='modal'>
                  Log in
                </button>
                <button type='submit' className='btn btn-primary' data-bs-dismiss='modal'>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
