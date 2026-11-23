
console.log("TRISHUL website loaded successfully!");

// =====================================
// INDIVIDUAL PRODUCT ENQUIRIES
// =====================================

function selectProduct(productName) {

  const message = document.getElementById("selection-message");

  if (!message) {
    alert("Selection area not found.");
    return;
  }

  message.style.display = "block";

  message.innerHTML = `
    <h3>Thank You for Selecting TRISHUL!</h3>

    <p>
      Your selected card:
      <strong>${productName}</strong>
    </p>

    <p>
      Your choice is the beginning of a smarter
      digital experience.
    </p>

    <form id="individual-enquiry-form">

      <label for="individual-customer-name">
        Your Name
      </label>

      <input
        type="text"
        id="individual-customer-name"
        placeholder="Enter your name"
        required
      >

      <button
        type="submit"
        class="product-button"
      >
        Continue to WhatsApp
      </button>

    </form>
  `;

  message.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  const enquiryForm =
    document.getElementById("individual-enquiry-form");

  enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName =
      document.getElementById("individual-customer-name")
      .value.trim();

    if (!customerName) {
      alert("Please enter your name.");
      return;
    }

    const whatsappMessage =
      "Hello TRISHUL!\n\n" +
      "Customer Name: " + customerName + "\n" +
      "Selected Product: " + productName + "\n\n" +
      "Thank you. Please share the details.";

    const whatsappLink =
      "https://wa.me/918669554941?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappLink, "_blank");

  });

}


// =====================================
// CORPORATE BULK ORDER ENQUIRY
// =====================================

const bulkForm =
  document.getElementById("bulk-order-form");

if (bulkForm) {

  bulkForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName =
      document.getElementById("bulk-customer-name")
      .value.trim();

    const cardType =
      document.getElementById("bulk-card-type").value;

    const quantity =
      document.getElementById("bulk-quantity").value;

    const requirements =
      document.getElementById("bulk-requirements")
      .value.trim();

    if (!customerName || !cardType || !quantity) {
      alert("Please fill in your name, card type and quantity.");
      return;
    }

    const whatsappMessage =
      "Hello TRISHUL! I would like a bulk order quotation.\n\n" +
      "Customer Name: " + customerName + "\n" +
      "Card Type: " + cardType + "\n" +
      "Quantity: " + quantity + "\n" +
      "Additional Requirements: " +
      (requirements || "None") +
      "\n\nPlease share the pricing and details.";

    const whatsappLink =
      "https://wa.me/918669554941?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappLink, "_blank");

  });

}
