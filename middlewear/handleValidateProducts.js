// E:\projects\advanced-express\middlewear\handleValidateProducts.js

const handleValidateProducts = (schema) => {
        return (req, res, next) => {
            // Dummy validation logic
            const { error } = schema.validate(req.body);
            if (error) {
                return res.status(400).send(error.details);
            }
            next();
        };
    };
    
    export default handleValidateProducts;
    