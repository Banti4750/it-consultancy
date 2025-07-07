const { SubscribedEmail } = require('../../db');

exports.getSubscribedEmails = async (req, res) => {
    try {
        const subscribedEmails = await SubscribedEmail.find();
        res.status(200).json({msg:"Subscribed email" , subscribedEmails});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteSubscribedEmail = async (req, res) => {
    try {
        const { id } = req.params;
        await SubscribedEmail.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Subscribed email deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};