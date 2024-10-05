import illustration from "./assets/images/illustration-working.svg"
import background from "./assets/images/bg-shorten-desktop.svg"

function Shorten(){

    const ShortenUrl = () => {
        const urlBox = document.getElementById("url-box").value;

        const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlBox)}`;
        const message = document.getElementById("error-message");
        // Create a new button element
        let urlResult = document.createElement('input');
        urlResult.readOnly = true;
        let copyButton = document.createElement('button');
        copyButton.innerHTML = 'Copy';

        fetch(apiUrl)
        .then(response => response.text())
        // .then(data => urlResult.innerHTML(data))
        .then(data => urlResult.value = data)
        .then(Create())
        .catch(error => message.innerHTML = "Error: Unable to shorten")

        // Add a click event listener to the new button
        copyButton.addEventListener('click', function() {
            copyButton.innerHTML = 'Copied!';
            urlResult.select();
            urlResult.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(urlResult.value);
        });
        
        // Append the new button to the container
        async function Create(){
            await fetch(apiUrl);
            document.getElementById('shortUrlContainer').appendChild(urlResult);
            document.getElementById('shortUrlContainer').appendChild(copyButton);

            if (urlBox === "") {
                message.innerHTML = "Please type in a valid URL";
                message.style.color = "red";
            }
            else {
                message.innerHTML = "";
            }
        }
    }

    return (
        <main>
            <div className="description">
                <div className="description-text">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed
                        insights on how your links are performing</p>
                    <a className="start-button" href="#start">Get Started</a>
                </div>
                <img src={illustration}></img>
            </div>
            
            {/* <div id="url-box">
                    <input className="url-text" type="text" placeholder="Shorten a link here..."></input>
                    <button id="shortBtn" onClick={ShortenUrl}>Shorten It!</button>
            </div> */}

            <div id="url-container">
                <input type="text" id="url-box"></input>
                <button id="shortBtn" onClick={ShortenUrl}>Shorten It!</button>
                <p id="error-message"></p>
            </div>
            <p id="message"></p>
                
            <div id="shortUrlContainer"></div>
        </main>
    )
};

export default Shorten