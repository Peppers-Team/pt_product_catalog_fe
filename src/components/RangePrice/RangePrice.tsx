import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type Props = {
  priceRange: number[];
};

export const RangePrice: React.FC<Props> = ({
  priceRange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const priceFrom = searchParams.get('priceFrom') || priceRange[0];
  const priceTo = searchParams.get('priceTo') || priceRange[1];

  const [value, setValue] = useState<number[]>(
    [Number(priceFrom), Number(priceTo)],
  );

  useEffect(() => {
    setValue([Number(priceFrom), Number(priceTo)]);
  }, [priceRange]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleTest = () => {
    params.set('priceFrom', value[0].toString());
    params.set('priceTo', value[1].toString());

    setTimeout(() => {
      setSearchParams(params);
    }, 500);
  };

  return (
    <section className="range__section">
      <span className="range__price-number">
        {priceRange[0]}
      </span>

      <Box
        sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleTest}
          valueLabelDisplay="auto"
          min={priceRange[0]}
          max={priceRange[1]}
        />
      </Box>

      <span className="range__price-number">
        {priceRange[1]}
      </span>
    </section>
  );
};
