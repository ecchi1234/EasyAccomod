/**
 * this file contain function to check requirement of input (eg: 3 images are needed,...),
 *  match expression, normalize input when user type in
 *
 *
 *
 * */

// normalize name (delete white space, capital style)

/** 
 * check if password is 8-characters, 
has at least 1 capital character, 
1 special character (eg: @, ?...)
1 number character
=> need to use regex
* 
*/
const checkPassword = (password) => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return pattern.test(password);
};

/**
 * check if email have right format
 *
 * valid email:
 * mysite@ourearth.com, my.ownsite@ourearth.org, mysite@you.me.net
 *
 * invalid email:
 *
 * mysite.ourearth.com [@ is not present]
 * mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
 * @you.me.net [ No character before @ ]
 * mysite123@gmail.b [ ".b" is not a valid tld ]
 * mysite@.org.org [ tld can not start with dot "." ]
 * .mysite@mysite.org [ an email should not be start with "." ]
 * mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
 * mysite..1234@yahoo.com [double dots are not allowed]
 */
const checkEmail = (email) => {
  const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
};

/**
 * check if phone number have 8 digits and is vietnamese phone number
 *
 */
const checkPhoneNumber = (phonenumber) => {
  const pattern = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  return pattern.test(phonenumber);
};

/**
 * check if confirm password match password
 *
 *
 */

const checkMatchPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

/**
 * check if user not let any required input empty
 *
 */
export const checkEmpty = (value) => {
  return value === "";
};

/**
 * check if identity number has 9 or 11 digits
 *
 */

/**
 * check if all requirement of input true
 *
 */

const checkTrueInput = (
  firstname,
  lastname,
  email,
  username,
  password,
  confirmpass,
  phone,
  identity,
  address
) => {
    
};
