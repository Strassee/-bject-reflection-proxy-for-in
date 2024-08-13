import orderByProps from '../basic';

test('should sorted properties', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const properties = orderByProps(obj, ['name', 'level']);
  const result = [
    {
      key: 'name',
      value: 'мечник',
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
  ];
  expect(properties).toEqual(result);
});
