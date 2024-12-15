import { useCallback } from 'react';

const usePercentage = () => {
  const calculateDiscountPercentage = useCallback((originalPrice, discountedPrice) => {
    if (originalPrice <= 0) {
      throw new Error("Original price must be greater than 0");
    }

    // Nếu giá giảm là null, coi như không có giảm giá
    const finalDiscountedPrice = discountedPrice === null ? originalPrice : discountedPrice;
    
    // Tính phần trăm giảm giá
    const discount = ((originalPrice - finalDiscountedPrice) / originalPrice) * 100;
    return Math.round(discount); // Làm tròn đến 2 chữ số thập phân
  }, []);

  return { calculateDiscountPercentage };
};

export default usePercentage;
