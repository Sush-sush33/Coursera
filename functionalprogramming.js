// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    const message = "%c" + txt; // Add `%c` to apply CSS styling in console logs.
    
    // Build the CSS style string
    let style = `color: ${color}; `;
    style += `background: ${background}; `;
    style += `font-size: ${fontSize}; `;
    
    console.log("Logging consoleStyler variables:", {color, background, fontSize, txt}); // Log variables for debugging
    console.log(message, style); // Log styled message
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    const fontStyle = "color: tomato; font-size: 50px";
    
    console.log("Logging celebrateStyler variable:", {reason}); // Log reason for debugging
    
    if (reason === "birthday") {
        console.log(`%cHappy birthday!`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(`%c${reason}`, fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    console.log("Calling styleAndCelebrate() with arguments:", {color, background, fontSize, txt, reason});
    
    // Call both functions with provided arguments
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Call styleAndCelebrate
styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');
