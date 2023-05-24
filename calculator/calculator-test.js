
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 200000,
    years: 16,
    rate: 6.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('1655.92')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 200043,
    years: 16,
    rate: 6.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('1656.28')
});

it("should show a super high interest", function() {
  const values = {
    amount: 2000,
    years: 40,
    rate: 99.99
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.65')
});

/// etc
