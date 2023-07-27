/**
 * @desc    Generic function to send any api response
 * 
 * @param   {string} status
 * @param   {number} statusCode
 * @param   {string} message
 * @param   {object | array} data
 *
 
 */


exports.apiResponse = (status, statusCode, message, data)=> {

    const codes = [200, 201, 400, 401, 404, 403, 422, 500];

    // Get matched code 
    // and return 500 if matched code is not in list
    const findCode = codes.find((code) => code == statusCode);
  
    if (!findCode) statusCode = 500;
    else statusCode = findCode;

    return {
      status,
      code: statusCode,
      message,
      data
    };
  }

/**
 * @desc    api response status options: failed or success
 
 */

exports.statusOptions = {
  success:"success",
  failed:"failed"
}