// select elements
const signUpBox = document.getElementById("signUpBox");
const main = document.querySelector("main");
signUpBox.appendChild(main);  //Append main element to signupbox

//set innerHTML for main
main.innerHTML = ` 
    <nav>
        <p>User Registration - New User</p>
        <h5>Mandatory fields are marked with an asterisk(*)</h5>   
    </nav>
    <form id="form">

        <div class="inputControl">
            <label for="fname">First Name<sup>*</sup></label>
            <input type="text" class="input" id="fname" name="fname" required>
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text1">(First Name is available in your passbook and/or statement of account)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="lname">Last Name<sup>*</sup></label>
            <input type="text" id="lname" class="input" name="lname" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text2">(Last Name is available in your passbook and/or statement of account)</p>
            <div id="small" class="error"></div>
        </div>  

        <div class="inputControl">
            <label for="accountnumber">Account Number<sup>*</sup></label>
            <input type="text" class="input" id="accountNumber" name="accountnumber" required>
            <i class="fa-solid fa-circle-check"></i>
            <i class="fa-solid fa-circle-exclamation"></i>
            <p class="text3">(Account Number is available in your passbook and/or statement of account)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="ifs">IFS Code<sup>*</sup></label>
            <input type="text" id="ifsCode" class="input" name="ifs" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text4">(IFS code is available in your passbook and/or statement of account)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="branch">Branch Name<sup>*</sup></label>
            <input type="text" id="branch" class="input" name="branch" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text5">(Branch Name is available in your passbook and/or statement of account)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="mobilenumber">Registered Mobile Number<sup>*</sup></label>
            <input type="text" id="mobileNumber" class="input" name="mobilenumber" maxlength="10" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text6">(Please enter Mobile Number registered with Bank)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="mail">Registered E-mail Id<sup>*</sup></label>
            <input type="email" id="mail" class="input" name="mail" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text7">(Please enter Mobile Number registered with Bank)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="username">User Name</label>
            <input type="text" id="User" class="input" name="username" required> 
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
        </div>

        <div class="inputControl">
            <label for="password">Password<sup>*</sup></label>
            <input type="password" id="secure" class="input" name="password" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text8">(Password should contain a minimum of 8 characters)</p>
            <div id="small" class="error"></div>
        </div>

        <div class="inputControl">
            <label for="confirm password">Confirm Password<sup>*</sup></label>
            <input type="password" id="confirmsecure" class="input" name="confirm password" required>
            <i class="icon fa-solid fa-circle-check"></i>
            <i class="icon fa-solid fa-circle-exclamation"></i>
            <p class="text9">(Confirm Password)</p>
            <div id="small" class="error"></div>
        </div>

    </form>
    <aside>
        <div class="agreePara">
            <p>Dear Customer,</p>
            <p id="start">After onboarding on TULA Online, the created user ID will be enabled for login through YONO and YONO Lite as well, in addition to TULA Online.</p>
            <p>By clicking on 'I Agree,' you hereby give consent for the same. Please do not share your login credentials with anyone.</p>
        </div>
        <div id="button1">
            <button id="agree">I Agree</button>
            <button id="disagree">I Disagree</button>
        </div>
        <div id="button2">
            <button type="submit" id="submit">Submit</button>
        </div>
    </aside>
    <footer>
        <div id="rights">&copy; Tula Bank</div>
        <div id="terms">
            <ul>
                <li>Privacy Statement</li>
                <li>Disclosure</li>
                <li>Terms of Service (Terms & Conditions)</li>
            </ul>
        </div>
    </footer>`;
const inputAccountNumber = document.getElementById('inputAccountNumber');
const inputIfsCode = document.getElementById('ifsCode');
const inputBranchName = document.getElementById('inputBranch');
const inputMobileNumber = document.getElementById('mobileNumber');
const inputMailId = document.getElementById('mail');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    checkInput();
});

// Append forms and labels

function checkInput() {
    const accountNumber = inputAccountNumber.value.trim();
    const ifsCode = inputIfsCode.value.trim();
    const branchName = inputBranchName.value.trim();
    const mobileNumber = inputMobileNumber.value.trim();
    const mailId = inputMailId.value.trim();

    if (accountNumber === "") {
        setError(inputAccountNumber, "Account number cannot be blank");
    } else {
        setSuccess(inputAccountNumber);
    }
    if (ifsCode === "") {
        setError(inputIfsCode, "IFS code cannot be blank");
    } else {
        setSuccess(inputIfsCode);
    }
    if (branchName === "") {
        setError(inputBranchName, "Branch name cannot be blank");
    } else {
        setSuccess(inputBranchName);
    }
    if (mobileNumber === "") {
        setError(inputMobileNumber, "Mobile number cannot be blank");
    } else {
        setSuccess(inputMobileNumber);
    }
    if (mailId === "") {
        setError(inputMailId, "Mail ID cannot be blank");
    } else {
        setSuccess(inputMailId);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add('error');
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

// Footer setup
const footer = document.querySelector('footer');
main.appendChild(footer);

const rights = document.getElementById('rights');
const terms = document.getElementById('terms');
footer.appendChild(rights);
footer.appendChild(terms);
