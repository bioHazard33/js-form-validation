import matchRules from "match-rules";

const rule_object = {
  first_name: (exp, sourceObject) => /[A-Za-z]/g.test(exp) && exp.length > 3,
  last_name: (exp, sourceObject) => /[A-Za-z]/g.test(exp) && exp.length > 2,
  phone_no: (exp, sourceObject) => /[0-9]/g.test(exp) && exp.length === 10
};

function submit() {
  let user = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    phone_no: document.getElementById("phone_no").value
  };
  console.log(user);
  if (matchRules(user, rule_object)) {
    alert("Form submitted Successfully");
  } else {
    alert("Error while validating");
  }
  return false;
}

document.getElementById("submit").addEventListener("click", submit);
