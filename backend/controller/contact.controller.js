import Contact from "../model/contact.model.js";

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Contact.create({ name, email, message });
    res.status(200).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({ error: "Failed to save contact" });
  }
};

export const getContacts = async (req, res) => {
  try {
    const Contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(Contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};
