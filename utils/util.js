class Util {
  static ValidateEmail = (input) => {
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (input && input.length && emailRegexp.test(input)) {
      return false;
    } else {
      return "Email ID is Invalid";
    }
  }

  static nameCheck = (input) => {
    if(input=== 0 )
    {
      setError('Name and email is mandatory');
    }
    else if(!re.test(input) )
    {
      return 'Name only alphabets allowed';
    }
    
    else if (input.length && input.length < 100) {
      return false;
    } else {
      return "Name is required and max allowed length is 100";
    }
  }
}
module.exports = Util; 