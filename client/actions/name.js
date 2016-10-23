// keep name-spacing of action types really simple -> model name, action type
export const actions = {
  UPDATE: 'NAME_UPDATE',
};

export function update(value) {
  return {
    value,
    type: actions.UPDATE,
  };
}
