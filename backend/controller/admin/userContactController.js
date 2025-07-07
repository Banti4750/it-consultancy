const { ContactForm } = require('../../db');

exports.getContactForms = async (req, res) => {
    try {
        const contactForms = await ContactForm.find();
        res.status(200).json({msg:"Contact form retrive" , contactForms});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteContactForm = async (req, res) => {
    try {
        const { id } = req.params;
        await ContactForm.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Contact form entry deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};