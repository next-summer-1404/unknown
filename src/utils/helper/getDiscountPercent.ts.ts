

export const getDiscountPercent = (price: string, discountedPrice: string) :string => {
 const original = Number(price);
  const discounted = Number(discountedPrice);

  if (!original || !discounted || discounted >= original) {
    return "0";
  }

  const percent = ((original - discounted) / original) * 100;
  return Math.round(percent)+ "%";
}


