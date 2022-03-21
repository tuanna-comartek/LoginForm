const { override, addLessLoader } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
  alias({
    ...configPaths('tsconfig.paths.json'),
  }),
  addLessLoader({
    lessOptions: {
      modifyVars: {
        '@primary-color': '#F80000', // primary color for all components
        '@link-color': '#c8171e', // link color
        '@menu-dark-bg': '#2c3a57',
        '@layout-sider-background': '#2c3a57',
        '@input-placeholder-color': '#999999',
        '@form-item-margin-bottom': '30px',
        '@height-base': '40px',
        '@layout-body-background': '#EEF0F4',
        '@pagination-item-bg': 'transparent',
        '@pagination-item-bg-active': '#fff',
        '@switch-color': '#00BE39',
        '@input-bg': '#F9F9F9',
        '@checkbox-size': '20px',
        '@radio-size': '24px',
        // '@success-color': '#52c41a', // success state color
        // '@warning-color': '#faad14', // warning state color
        // '@error-color': '#f5222d', // error state color
        '@font-size-base': '16px', // major text font size
        // '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
        // '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
        // '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
        // '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
        '@border-radius-base': '3px', // major border radius
        // '@border-color-base': '#d9d9d9', // major border color
        // '@box-shadow-base':
        //   '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      },
      javascriptEnabled: true,
    },
  }),
);
