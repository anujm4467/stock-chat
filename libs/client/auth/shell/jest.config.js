module.exports = {
  name: 'client-auth-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/auth/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
