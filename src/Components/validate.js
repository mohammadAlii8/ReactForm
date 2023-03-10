export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }
  if (!data.Password) {
    errors.Password = "Password is required";
  } else if (data.Password.length < 6) {
    errors.Password = "Password need to be 6 character or more";
  } else {
    delete errors.Password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.Password) {
      errors.confirmPassword = "password do not match";
    } else {
      delete errors.confirmPassword;
    }
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulation";
    }
  }
  return errors;
};
