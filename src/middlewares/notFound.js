const notFound = (req, res) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404).json({
      success: false,
      message: error.message
    });
  };
  
  export default notFound;
  