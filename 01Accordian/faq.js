const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];




// accordionDiv.innerText = "acc-head";
let accordianBody = document.querySelector(".accordian_body");

let mainaccDiv = document.createElement("div");


mainaccDiv.className = "main-accdiv";
accordianBody.appendChild(mainaccDiv)


const faqs = [];



function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    // let accordianBody =document.querySelector(".accordian_body");
    const accordionDiv = document.createElement("div");
    accordionDiv.className = "faq";
    const accordianDisc = document.createElement("div");
    accordianDisc.className = "acc-disc";

    // let description = document.querySelectorAll(".acc-disc")

    // function demoDisplay() {
    //   description.style.display = "none";
    // }

    // demoDisplay()


    // console.log(description)

    console.log(accordianDisc.style.display = "none")


    console.log(faqData)
    // accordionDiv.innerText = faqData[i].question

    mainaccDiv.appendChild(accordionDiv);
    mainaccDiv.appendChild(accordianDisc);
    accordionDiv.innerText = faqData[i].question
    accordianDisc.innerText = faqData[i].answer;


    accordionDiv.addEventListener("click", function () {



      if (accordianDisc.style.display == "none") {
        accordianDisc.style.display = "block"
      } else {
        accordianDisc.style.display = "none"
      }

    }
    )


  }


}

createFaq()

function btnStatusUpdate() {

}


