const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxpalleteBoxes = 35;

const generatePallete = () => {
  container.innerHTML = ""; // clearig the container
  for (let i = 0; i < maxpalleteBoxes; i++) {
    // generating radom hexa code color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    // console.log(randomHex);

    // creating new li element and inserting into the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="rect-box" style="background : ${randomHex}" ></div>
      <span class="hex-value">${randomHex}</span>`;

    //adding click  event  to current  li element to copy  the color code
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
generatePallete();

const copyColor = (ele, hexValue) => {
  const colorElement = ele.querySelector(".hex-value");
  // Copy the hex value , updating  the text to clipboard
  navigator.clipboard.writeText(hexValue).then(() => {
    colorElement.innerText = "Copied";
    // changing  text back to  original  hex value  after 1 sec
    setTimeout(() => {
      colorElement.innerText = hexValue;
    }, 1000);
  });
  console.log(ele , hexValue)
};

refreshBtn.addEventListener("click", generatePallete);
