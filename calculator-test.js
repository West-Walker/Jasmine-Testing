it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 20000,
      years: 4,
      rate: 6.3
    };
    expect(calculateMonthlyPayment(values)).toEqual('472.46');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 23479,
      years: 7,
      rate: 3.9
    };
    expect(calculateMonthlyPayment(values)).toEqual('319.85');
  });
  
  it("should handle very high interest rates", function() {
    const values = {
      amount: 15000,
      years: 6,
      rate: 96.9
    };
    expect(calculateMonthlyPayment(values)).toEqual('1215.79');
  });
  
  it("should handle very low interest rates", function() {
    const values = {
      amount: 17500,
      years: 10,
      rate: 0.5
    };
    expect(calculateMonthlyPayment(values)).toEqual('149.54')
  });