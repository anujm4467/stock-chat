module.exports = {
  name: 'client-shared-environments',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/client/shared/environments',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
