/**
 * cleanup-after-each:
 * If any of your code has import
 * '@testing-library/react/cleanup-after-each'
 * then you need to remove that.
 * It's happening automatically now.
 * https://github.com/testing-library/testing-library-docs/issues/212
 * https://github.com/testing-library/react-testing-library/releases/tag/v9.0.0
 *
 * import "@testing-library/react/cleanup-after-each";
 */
import '@testing-library/jest-dom/extend-expect'
