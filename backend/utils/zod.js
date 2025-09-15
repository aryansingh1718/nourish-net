const { z } = require("zod");

// Signup validation
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["donor", "consumer"]),
});

// Login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Food add validation
const foodSchema = z.object({
  name: z.string().min(2, "Name is required"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(2, "Category is required"),
  description: z.string().optional(),
  expiryTime: z.string(), 
  location: z.string().min(2, "Location is required"),
  quantity: z.number().int().positive("Quantity must be positive"),
  provider: z.string().min(2, "Provider is required"),
}); 

// For PUT (full replacement)
const foodUpdateSchema = foodSchema;

// For PATCH (partial updates, optional fields)
const foodPartialSchema = foodSchema.partial();

module.exports = { signupSchema, loginSchema, foodSchema,foodUpdateSchema,foodPartialSchema };
