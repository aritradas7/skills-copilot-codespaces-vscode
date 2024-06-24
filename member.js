function skillsMember() {
  var member = document.querySelector("#member");
  var memberSkills = document.querySelector("#skills-member");

  member.addEventListener("click", function () {
    memberSkills.classList.toggle("skills-member");
  });
}