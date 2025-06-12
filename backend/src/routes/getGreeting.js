const GREETING = 'Hola mundo, con GIT Flow!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
