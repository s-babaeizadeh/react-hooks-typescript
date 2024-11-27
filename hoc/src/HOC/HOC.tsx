export interface SampleObjectProps {
  name: string;
  role: string;
  company: string;
}

const HOC = (Component: React.ComponentType<{ value: SampleObjectProps }>) => {
  const sampleObject: SampleObjectProps = {
    name: "John",
    role: "Frontend Developer",
    company: "Public Company",
  };

  return () => <Component value={sampleObject} />;
};

export default HOC;
